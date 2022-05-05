import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository } from './../feedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {

  async create(data: FeedbackCreateData) {
    const {type, comment, screenshot} = data;
    
    await prisma.feedback.create({
      data: {
        type,
        comment, 
        screenshot
      }
    });
  }
}
