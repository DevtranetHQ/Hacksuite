import showdown from "showdown";

const showdownConverter = new showdown.Converter({
  emoji: true,
  omitExtraWLInCodeBlocks: true,
  openLinksInNewWindow: true,
  strikethrough: true,
  smoothLivePreview: true,
  underline: true
});

export default showdownConverter;
