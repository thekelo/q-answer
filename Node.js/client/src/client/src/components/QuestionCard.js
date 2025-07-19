import { upvoteQuestion } from '../services/questionService';

export default function QuestionCard({ question }) {
  const handleUpvote = async () => {
    await upvoteQuestion(question._id);
    // Optimistic UI update here
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <button onClick={handleUpvote}>▲</button>
          <span>{question.votes}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            <Link to={`/question/${question._id}`}>{question.title}</Link>
          </h3>
          <div className="flex flex-wrap gap-2 my-2">
            {question.tags.map(tag => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
