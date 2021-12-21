mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/google-search-and-save',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);