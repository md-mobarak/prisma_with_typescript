import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPostService = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 5;

  // added transection
  return await prisma.$transaction(async (txt) => {
    const result = await txt.post.findMany({
      skip,
      take,
      include: {
        category: true,
        author: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    return result;
  });
};

const singleSpostGet = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      author: true,
    },
  });
  return result;
};
const updatePostService = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deletePostService = async (id: number) => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

const learnAgreegateAndGroup = async () => {
  // const result = await prisma.post.aggregate({
  //   _avg: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  //   _count: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  //   _sum: {
  //     authorId: true,
  //   },
  // });
  const result = await prisma.post.groupBy({
    by:["title"]
  })
  return result;
};

export const postService = {
  deletePostService,
  createPostService,
  singleSpostGet,
  getAllPost,
  updatePostService,
  learnAgreegateAndGroup,
};
