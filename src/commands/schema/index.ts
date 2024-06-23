import { ApplicationCommandData } from 'discord.js';
import { ApplicationCommandOptionType } from 'discord-api-types/v10';

export const schema: ApplicationCommandData[] = [
  {
    name: 'play',
    description: 'Plays a song or playlist on Youtube',
    options: [
      {
        name: 'input',
        type: ApplicationCommandOptionType.String,
        description: 'The url or keyword to search videos or playlist on Youtube',
        required: true,
      },
    ],
  },
  {
    name: 'skip',
    description: 'Skip to the next song in the queue',
  },
  {
    name: 'queue',
    description: 'See the music queue',
  },
  {
    name: 'pause',
    description: 'Pauses the song that is currently playing',
  },
  {
    name: 'resume',
    description: 'Resume playback of the current song',
  },
  {
    name: 'nowplaying',
    description: 'See the song that is currently playing',
  },
  {
    name: 'shuffle',
    description: 'Shuffle the queue',
  },
  {
    name: 'jump',
    description: 'Jump to song in queue by position',
    options: [
      {
        name: 'position',
        type: ApplicationCommandOptionType.Number,
        description: 'The position of song in queue',
        required: true,
      },
    ],
  },
  {
    name: 'remove',
    description: 'Remove song in queue by position',
    options: [
      {
        name: 'position',
        type: ApplicationCommandOptionType.Number,
        description: 'The position of song in queue',
        required: true,
      },
    ],
  },
  {
    name: 'ping',
    description: 'See the ping to server',
  },
  {
    name: 'leave',
    description: 'Leave the voice channel',
  },
  {
    name: 'help',
    description: 'See the help for this bot',
  },
];