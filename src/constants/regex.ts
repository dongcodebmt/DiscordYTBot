export const youtubeVideoRegex = new RegExp(
  /(?:youtube\.com\/(?:[^\\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\\/\s]{11})/,
);

export const youtubePlaylistRegex = new RegExp(
  /https:\/\/www\.youtube\.com\/.*\?.*\blist=.*/,
);

export const soundCloudTrackRegex = new RegExp(
  /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/,
);

export const soundCloudPlaylistRegex = new RegExp(
  /^https?:\/\/(soundcloud\.com|snd\.sc)\/([^?])*\/sets\/(.*)$/,
);

export const discordInviteShortRegex = new RegExp(
  /https:\/\/discord\.gg\/(\w+)/,
);

export const discordInviteRegex = new RegExp(
  /https:\/\/discord\.com\/invite\/(\w+)/,
);
