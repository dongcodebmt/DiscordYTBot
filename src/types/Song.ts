import { Platform } from '@/types/Platform';

export interface Song {
  title: string;
  length: number;
  author: string;
  thumbnail: string;
  url: string;
  platform: Platform;
}
