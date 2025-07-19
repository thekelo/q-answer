import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AskQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createQuestion({ title, body, tags });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title..." 
      />
      <ReactQuill 
        value={body} 
        onChange={setBody} 
        modules={modules} 
      />
      <TagInput tags={tags} setTags={setTags} />
      <button type="submit">Post Question</button>
    </form>
  );
}
