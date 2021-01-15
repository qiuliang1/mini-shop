'use strict';
const db = uniCloud.database({
  spaceId: '61f1d472-5c10-4e0c-90da-e2ed245afd0a'
});
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('banner');
	const res = await collection.limit(10).get()
	//返回数据给客户端
	return res
};
