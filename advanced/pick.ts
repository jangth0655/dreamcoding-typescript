{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideos(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://~~",
      data: "byte-data",
    };
  }

  type VideoMetaData = Pick<Video, "id" | "title">;
  function getVideoMetadatas(id: string): VideoMetaData {
    return {
      id,
      title: "pick type",
    };
  }
}
