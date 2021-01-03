import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react';
import { W } from '../../dimensions';

import { LOGO } from '../../assets';
//LOGO : metro-config dosyasında ilişkilendirildi

const Splash = observer(() => {
	return (
		<View style={styles.container}>

			<View>
				<LOGO width={W(60)} height={W(60)} />
			</View>

		</View>
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
