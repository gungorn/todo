import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';

import { Splash, Home } from './screens';

const App = observer(() => {
	return (
		<View style={styles.container}>
			<Splash />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});


export { App };
