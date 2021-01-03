import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import { W, H } from './dimensions';

import { Splash, Home } from './screens';

const App = observer(() => {
	return (
		<>
			<StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />

			<View style={styles.container}>
				<Splash />
			</View>
		</>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});


export { App };
