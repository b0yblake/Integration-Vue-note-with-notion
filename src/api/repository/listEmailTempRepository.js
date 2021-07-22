import Repository from "@/api/core";

const BASE_URL = `${import.meta.env.VITE_MAIN_URL}/listInbox`;

const fetch = (params) => {
	return Repository(BASE_URL).fetch(params);
};

const fetchOne = (id) => {
	return Repository(BASE_URL).fetchOne(id);
};

const create = (params) => {
	return Repository(BASE_URL).create(params);
};

const updateAll = (id, params) => {
	return Repository(BASE_URL).updateAll(id, params);
};
const update = (id, params) => {
	return Repository(BASE_URL).update(id, params);
};

const remove = (id) => {
	return Repository(BASE_URL).delete(id);
};

export default {
	fetch,
	fetchOne,
	create,
	updateAll,
	update,
	remove,
};
