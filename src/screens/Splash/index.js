import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react';
import * as RNA from 'react-native-animatable';

import { W, H } from '../../dimensions';

import { LOGO } from '../../assets';
//LOGO : metro-config dosyasında ilişkilendirildi

const Splash = observer(() => {
	return (
		<RNA.View animation={'fadeIn'} duration={1500} style={styles.container}>

			<LOGO width={W(60)} height={W(60)} />
		</RNA.View>
	);
});



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});


export { Splash };
