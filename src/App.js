import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import { W, H } from './dimensions';

import { Splash, Home } from './screens';

import { set1, set2, set3, set4, get1, get2, get3 } from './FB';

const App = observer(() => {
	return (
		<>
			<StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />


			<View style={styles.container}>
				<Button
					title={'set1'}
					onPress={() => set1()}
				/>
				<Button
					title={'set2'}
					onPress={() => set2('1234', 'name', 'nurettin')}
				/>
				<Button
					title={'set3'}
					onPress={() => set3()}
				/>
				<Button
					title={'set4'}
					onPress={() => set4('1234', 'name', 'nurettin')}
				/>

				<Button
					title={'get1'}
					onPress={() => get1('id1', 'name')}
				/>

				<Button
					title={'get2'}
					onPress={() => get2()}
				/>

				<Button
					title={'get3'}
					onPress={() => get3()}
				/>
			</View>
		</>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});


export { App };
