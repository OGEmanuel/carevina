import { https } from '../https';

export const MUTATIONS = {
  sendEquiry: async function (data: {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    typeOfService: string;
  }) {
    return await https.post(`/api/enquiry-email`, data);
  },
  sendContact: async function (data: {
    fullName: string;
    phone: string;
    email: string;
    message: string;
  }) {
    return await https.post(`/api/contact-email`, data);
  },
  sendCareer: async function (data: {
    fullName: string;
    resume: File[];
    phone: string;
    email: string;
    position: string;
  }) {
    const formData = new FormData();

    formData.append('fullName', data.fullName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('position', data.position);

    formData.append('resume', data.resume[0]);

    return https.post('/api/career-email', formData);
  },
};
