import YouTube from "react-youtube";

const YoutubeEmbed = () => {
  const isDOM =
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement;

  if (!isDOM) return <div />;

  return (
    <YouTube
      style={{
        height: "100%",
      }}
      videoId="5sLYAQS9sWQ"
    />
  );
};

export default YoutubeEmbed;
