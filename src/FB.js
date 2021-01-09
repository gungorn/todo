import database from '@react-native-firebase/database';


export const set1 = () => {
	database() //veritabanı
		.ref('dizin1/dizin2') //dizin1//name
		.set('test')
		.then(d => {
			console.log('SET OKEY', d);
		})
		.catch(e => console.log('set1', e));
};

export const set2 = (userid, key, value) => {
	try {
		database() //veritabanı
			.ref('users') //dizin1//name
			.child(userid)
			.child(key)
			.set(value)
			.then(d => {
				console.log('SET OKEY', d);
			})
			.catch(e => console.log('set1', e));
	}
	catch (e) { console.log('TEST', e); }
};

export const set3 = () => {
	console.time('set3');

	for (let i = 0; i < 1; i++) {
		database() //veritabanı
			.ref('users') //dizin1//name
			.child(`user${i}`)
			.child('name')
			.set('test')
			.then(() => null)
			.catch(e => console.log('set1', e));
	}


	console.timeEnd('set3');
};

export const set4 = (userid, key, value) => {
	try {
		database()
			.ref('users')
			.push() //path'e uniqid ekler
			.push() //path'e uniqid ekler
			.push() //path'e uniqid ekler
			.push() //path'e uniqid ekler
			.push() //path'e uniqid ekler
			//.child(userid)
			.child(key)
			.set(value)
			.then(d => {
				console.log('SET OKEY', d);
			})
			.catch(e => console.log('set1', e));
	}
	catch (e) { console.log('TEST', e); }
};

export const get1 = (userid, key) => {
	database()
		.ref('users')
		.child(userid)
		.child(key)
		.once('value')
		.then(res => {
			const resdata = res.val();
			console.log('res', res);
			console.log('resdata', resdata);
		})
		.catch(e => console.log('get1', e));
};
export const get2 = () => {
	database()
		.ref('users')

		.orderByChild('surname')
		.equalTo('bbbb')

		.once('value')
		.then(res => {
			const resdata = res.val();
			console.log('res', res);
			console.log('resdata', resdata);
		})
		.catch(e => console.log('get1', e));
};
export const get3 = () => {
	let id2friends = {};

	database()
		.ref('friends')

		.orderByChild('user1')
		.equalTo('id2')

		.once('value')
		.then(res => {
			const resdata = res.val();
			id2friends = { ...id2friends, ...resdata }; //spread operator

			database()
				.ref('friends')

				.orderByChild('user2')
				.equalTo('id2')

				.once('value')
				.then(res => {
					const resdata = res.val();
					id2friends = { ...id2friends, ...resdata }; //spread operator

					console.log('id2friends', id2friends);
				});
		});
};
