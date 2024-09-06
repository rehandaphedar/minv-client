export const truncateString = (str: String, num: number) => {
	if (str.length > num) {
		return str.slice(0, num) + '...';
	} else {
		return str;
	}
};

export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toUTCString();
	// return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()} GMT`
};
