{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://~~",
      data: "byte-data",
    };
  }

  // 빼고 싶은것을 표기하고
  type VideoMetaData = Omit<Video, "url" | "data" | "he">;
  function getVideoMetadata(id: string): VideoMetaData {
    return {
      id,
      title: "pick type",
    };
  }
}
