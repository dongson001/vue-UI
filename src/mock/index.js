import Mock from 'mockjs';

Mock.mock('/api/getList', 'get', () => {
  return Mock.mock({
		"code": 0,
		"data|4": [{
			id: "@id",
			addres: "@cparagraph(2,3)", //段落2-3行
			name: "@cname", //随机中文名
			date: "@datetime" //随机日期
		}],
    'totalCount|10-25': 1
	})
});
