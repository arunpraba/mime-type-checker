import "./styles.css";

import "./styles.css";

const types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mpeg",
  "video/mp4"
];

export default function App() {
  return (
    <div>
      <h1 className="title">Check Media Recording type</h1>
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
