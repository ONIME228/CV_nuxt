export default async () => {
    const {data} = await useAsyncData('head', () => queryContent('/data').findOne());
    return data;
};