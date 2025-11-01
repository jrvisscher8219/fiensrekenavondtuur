import type { SoundName } from '../types';

// Base64 encoded audio files to prevent network requests and allow offline usage.
// Sounds generated from https://sfxr.me/
const audioSources: Record<SoundName, string> = {
  click: 'data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YVgAAABoAL0ANgCBAEIAkgD/ACwA/wEIAhACQAPwAvkEBAYIBpAHJAhSCr8M/A4pD7kQuhKzE/gV5hfUGJ4bDBx/HrYgRiP7JUAmmigBKf4s4DP9Ndw5+Tz7P0ZA5kI7Q+ZGb0h6S/hNak+hVExYdVtTXmJgoWSpa2yDeoOEhoyfmLG3vcjT3Obx+f8=',
  correct: 'data:audio/wav;base64,UklGRmAAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YWYAAACAgICAwMDAxMTEzMzM0NDQ2NjY4ODg6Ojo8PDw+Pj5AQEBCQkNERUVGRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tbZ3AAAAAP//AgAFAAsADgASABcAGgAfACIAJgApACwALgAxADMANgA5ADwAPwBDAEYASQBLAE4AUQBUAFcAWQBcAF8AYgBlAGgAawBuAHIAcwB2AHkAfAB9AH8AgQGEAYgBjgGRAZoBnAGjAasBswG7AcABwwHHAdEB1gHaAd8B5AHqAfIB+gH/AgEDBgIKAQ4BEQEUARgBGwEgASQBJwEqAS8BMgE1AToBPgFBATsBPwE+AT4BPAE1AS4BJAEdAQ8BCwEEAPr/7v/f/8z/wv+s/5j/if93/2f/V/8//xj/AP/u/7L/df8o/wD8/1r/Kf/e/5P/Ov/J/0j/1f/n/wE=',
  incorrect: 'data:audio/wav;base64,UklGRmAAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YWYAAABWVlZVVlVWVlZVVlZWVlZXV1dYWFhZWVpZ2tra2tvb3Nzc3t7e39/g4ODh4eHi4uLk5OTm5ubn5+fo6Ojp6enq6urq6uvr6+zs7O3t7e7u7vDw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v7+/v/+/v3+/f38/fz8/Pv7+vj5+ff39vX19PT08/Pz8vLx8fHw8O/u7u3t7Ozs6+vr6uno6Ojn5+fn5ubl5eTi4uLh4eDf39/f3t3c3Nvb2tpaWln/wv+R/7T/uf+8/7r/tv+x/6z/qf+m/6T/ov+g/53/mv+V/5P/kP+M/4v/iv+J/4r/jP+R/5b/nf+i/6n/tf+8/8L/zP/X/wE=',
  win: 'data:audio/wav;base64,UklGRn4DAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YZkDAACAgICIiIjJycnMzMzNzc3Pz8/R0dHS0tLT09PV1dXX19fZ2dnb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7/AAAAAP//AwAFAAgACwAOAAsADgARABMAFQAYABgAFwAWABUAEgANAAkABAACAP//+v/t/8//yv/L/83/0v/Z/+D/6v/z/wIACP8BAP7//f/r/9n/x//E/8f/zP/U/9v/5f/w/wAABwAKAA4AEgAXABoAHQAeACEAJAAnACgAKgAtAC8AMgA1ACwAKQAlACEAHwAcABgAFAAPAAkABAABAAAA//7//f/v/8v/u/+s/6P/m/+U/43/h/9//3H/af9f/2T/ZP9p/3P/fv+L/5T/n/+n/6//uv/H/9H/3//q//n/AQAFCf8HAPz/4/+4/37/Tf8S/wD5/0n/AP3/mv8q/4P/Uv+a/9f/+/8J/5v/6v/h/0T/vf9S/9v/Gv/4/w0A2/9M/4b/Cv+f/7oAhgBv/58Agv9U/2r/AP/Z/y0AKv9e/w0C8f+UAIH/JgD//6sAnQDs/wAAtv/3/7wAWgCT/1QAnf+tAJ//UQCj/x8Aqf/zAKT/JgBv/0cAev8gAEH/QADf/3oAM//o/5UAAP/Z/wAA1v/L/4kA0v/4/5MAsv/9/6wAwf/NAL//KwC3/y4AbP+h/wAA//8vAJ0AmQByAHMAegB6AHQAawBqAGgAZQBjAGAAXwBcAFwAWQBXAFYAUwBSAFIAUwBUAFYAWABaAFwAXgBgAGIAZQBoAGsAbwByAHcAfACBAAcADgAbACgAMwBAAEsAVgBhAGwAeACFAJMBoQGyAcIB3QHxAg4DIgQwBlIJawuCDcwQehR+GIIcviEqJkgrCDAmNlA5gD/uRHJQbVhqXmFja2t2en+EkJmhrLW/xcrW4O77/wAA',
  sticker: 'data:audio/wav;base64,UklGRrgEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYQEAACAgIDAwMHFxcrKysvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v-AAAAAAEBAgUDBAUICAsNDxATFBYYGhwfISMkJScoKSstLy8xMjQ1Nzs+QUZKS05TVlxeY2Zsb3J2ent+gYSHiYqOlp+itcjV4vP9//8CAwcIDQ8QExQWFxkbHB8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wDAwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAAAAAQECgYFDAsGDgsJDgsKDgsKDgsJDgsJDgoIDQgHDgYGDwUFCQUFCgMDCwMECwMGCgUGCgUGCQQDCAECAwABAAAAAP7/+v/1/vH+6f7g/tr+z/7H/sj+z/7W/tX+5f7g/vX+9v8A//8A/wAAAgADBAEEBQYHBggJCgsMDQ4PDxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMDAwsLExMbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8=',
};

const audioCache: Partial<Record<SoundName, HTMLAudioElement>> = {};

export const playSound = (name: SoundName): void => {
    try {
        const source = audioSources[name];
        if (!source) {
            console.warn(`Sound "${name}" not found.`);
            return;
        }

        // Use a cached audio element if available, otherwise create a new one.
        // This can help with responsiveness on some browsers.
        let audio = audioCache[name];
        if (!audio) {
            audio = new Audio(source);
            audioCache[name] = audio;
        }
        
        // Reset current time to allow playing the sound again quickly
        audio.currentTime = 0;
        audio.play().catch(error => console.error(`Error playing sound "${name}":`, error));

    } catch (error) {
        console.error(`Failed to play sound "${name}"`, error);
    }
};
