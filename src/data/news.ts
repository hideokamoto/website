import { IItem } from '../../scripts/build-data';

export const news: IItem = {
  selector: '<ul class="list-news"></ul>',
  template: '<li><label class="form-label">{{ title }}</label><p>{{ body }}</p></li>',
  data: [
    {
      title: 'コロナ感染症予防対策',
      body: 'コロナ感染症予防対策として、間隔に余裕のある席へのご案内、接客スタッフのマスク着用などの対応をしてお客様をお迎えいたします。',
    },
    {
      title: '10月のおやすみ',
      body: '10月7日（水）、8日（木）、14日（水）、21日（水）、28日（水）',
    },
    {
      title: '11月のおやすみ',
      body: '11月4日（水）、11日（水）、18日（水）、25日（水）、26日（木）',
    },
  ],
};
