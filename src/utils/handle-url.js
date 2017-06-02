export function parseVideoURL(video) {
  let src = video.src

  if (video.type === 'bilibili') {
    const matched = /(?:av)?([\d]+)/.exec(src)
    if (matched) {
      const id = matched[1]
      src = `https://api.prprpr.me/dplayer/video/bilibili?aid=${id}`
    }
    return { src }
  }

  if (!video.type) {
    return { src }
  }

  return video
}
