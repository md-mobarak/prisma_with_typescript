import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();
const userServiceFromDb = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data: data,
  });
  return result;
};

const profileCreateOrUpdate = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });
  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }
  const result = await prisma.profile.create({
    data,
  });
  return result;
};

const userGetService = async () => {
  const result = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};
const userGetSingleService = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};

export const userService = {
  userServiceFromDb,
  profileCreateOrUpdate,
  userGetService,
  userGetSingleService,
};
