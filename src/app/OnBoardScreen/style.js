//Created on Wednesday 02 June 2021 10∶10∶10 AM
import { StyleSheet } from 'react-native'
import { Colors, Sizes } from '../../core/theme';

export default StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: Colors.white
  },
  image: {
    height: (Sizes.base32 + Sizes.base) * 10 + 20,
    width: '100%',
    borderBottomLeftRadius: Sizes.base * 10 + 20,
  }, TitleAndTextContainer: {
    paddingHorizontal: Sizes.base16 + 4,
    paddingTop: Sizes.base16 + 4
  },
  indicatorContainer: {
    height: Sizes.base16 + 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: Sizes.base - 4,
    width: Sizes.base * 4,
    backgroundColor: Colors.grey,
    borderRadius: Sizes.radius - 3,
    marginHorizontal: Sizes.margin - 3,
  }, marginTop10: {
    marginTop: Sizes.margin + 2
  },
  indicatorActive: {
    backgroundColor: Colors.black,
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Sizes.padding * 5,
  },
  btn: {
    height: Sizes.base16 * 4 - 4,
    marginHorizontal: Sizes.base16 + 4,
    backgroundColor: Colors.black,
    borderRadius: Sizes.base16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Sizes.base32,
    fontWeight: 'bold'
  },
  textStyle: {
    fontSize: Sizes.base16,
    color: Colors.grey
  }, colorWhite: {
    color: Colors.white
  }
});
