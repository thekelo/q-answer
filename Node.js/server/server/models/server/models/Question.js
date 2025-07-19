const questionSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [{ type: String }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  votes: { type: Number, default: 0 },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  createdAt: { type: Date, default: Date.now }
});
