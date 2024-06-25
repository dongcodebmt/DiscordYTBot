import { youtubePlaylistRegex, youtubeVideoRegex } from '@/constants/regex';
import { Playlist, Platform, Song, ItemType } from '@/types';
import { YouTubePlugin, YouTubePlaylist, YouTubeSong, SearchResultType, YouTubeSearchResultSong } from '@distube/youtube';
import fs from 'fs';

export class YoutubeService {
  private plugin: YouTubePlugin = new YouTubePlugin();

  constructor() {
    const dir = 'cookies.json';
    if (fs.existsSync(dir)) {
      this.plugin = new YouTubePlugin({
        cookies: JSON.parse(fs.readFileSync(dir, 'utf-8'))
      });
    }
  }

  public async getStream(url: string): Promise<string> {
    return this.plugin.getStreamURL(<YouTubeSong>{ url });
  }

  public async getResult(content: string): Promise<Playlist | Song> {
    if (this.isPlaylist(content)) {
      return this.getPlaylist(content);
    }
    if (this.isVideo(content)) {
      return this.getSong(content);
    }
    return this.searchSong(content);
  }

  public async getPlaylist(url: string): Promise<Playlist> {
    const result = await this.plugin.resolve(url, {});
    if (!(result instanceof YouTubePlaylist)) {
      throw new Error();
    }
    const songs: Song[] = result.songs.map(item => (
      <Song> {
        title: item.name,
        duration: item.duration,
        author: item.uploader.name,
        thumbnail: item.thumbnail,
        url: item.url, 
        platform: Platform.YOUTUBE
      }
    ));
    return <Playlist> {
      title: result.name,
      thumbnail: result.thumbnail,
      author: ItemType.PLAYLIST,
      songs
    };
  }

  public async getSong(url: string): Promise<Song> {
    const result = await this.plugin.resolve(url, {});
    if (!(result instanceof YouTubeSong)) {
      throw new Error();
    }
    return <Song> {
      title: result.name,
      duration: result.duration,
      author: result.uploader.name,
      thumbnail: result.thumbnail,
      url: result.url,
      platform: Platform.YOUTUBE
    };
  }

  public async searchSong(keyword: string): Promise<Song> {
    const result = await this.plugin.search(keyword, { type: SearchResultType.VIDEO, limit: 1 });
    if (result.length === 0) throw new Error();
    const item = result.at(0) as YouTubeSearchResultSong;
    return <Song> {
      title: item.name,
      duration: item.duration,
      author: item.uploader.name,
      thumbnail: item.thumbnail,
      url: item.url,
      platform: Platform.YOUTUBE
    };
  }

  public isPlaylist(url: string): boolean {
    const paths = url.match(youtubePlaylistRegex);
    return paths != null;
  }
  
  public isVideo(url: string): boolean {
    const paths = url.match(youtubeVideoRegex);
    return paths != null;
  }
}
