import "./styles.css";

const types = [
  "video/webm",
  "video/mp4",
  "audio/webm",
  "video/mpeg",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=vp9",
  "video/webm;codecs=vp8.0",
  "video/webm;codecs=vp9.0",
  "video/webm;codecs=h264",
  "video/webm;codecs=avc1",
  "video/webm;codecs=vp8,opus",
  "video/webm;codecs=vp9,opus",
  "video/webm;codecs=vp8,vp9,opus",
  "video/webm;codecs=h264,opus",
  "video/webm;codecs=h264,vp9,opus",
  "video/x-matroska;codecs=avc1",
  "audio/webm;codecs=opus",
];

export default function App() {
  return (
    <div className="app">
      <h1 className="title">
        <code>mimeType</code> checker for MediaRecorder API
      </h1>
      <table>
        <thead>
          <th>Mime Type</th>
          <th>Is Supported</th>
        </thead>
        {types.map((type) => (
          <tr>
            <td>{type}</td>
            <td>{String(MediaRecorder.isTypeSupported(type))}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
