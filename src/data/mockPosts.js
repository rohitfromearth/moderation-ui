const samplePost = (i) => ({
  id: `post_${i}`,
  title: `Sample Post #${i}`,
  content: `This is the full content of post #${i}.`,
  author: {
    username: `user${i}`,
    id: `user_${i}`,
  },
  reportedReason: ["Spam", "Abuse", "Misinformation", "Harassment"][i % 4],
  reportedAt: new Date(Date.now() - i * 10000000).toISOString(),
  status: "pending",
  reportCount: Math.floor(Math.random() * 10) + 1,
})

export const mockPosts = Array.from({ length: 50 }, (_, i) => samplePost(i + 1))
