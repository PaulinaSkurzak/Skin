/*
import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.tsx</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

*/
/*
import React from "react"
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"
export const Example = () => {
  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}


*/


import React from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  IconButton,
  StatusBar,
  Icon,
  Stack,
  Image,
  Button,
  Pressable,
  AspectRatio,
} from "native-base"

import { MaterialIcons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";

const acne = require("./assets/skin/acne.jpeg");
const eczema = require("./assets/skin/eczema.jpeg");
const kp = require("./assets/skin/kp.jpeg");
const hives = require("./assets/skin/hives.jpeg");
const sunburn = require("./assets/skin/sunburn.jpeg");

function SkinDisList ({ navigation }) {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      img: acne,
      fullName: "Acne",
      recentText: "Hair follicles clogged with oil and\ndead skin cells",
      fullText: "dfadfaf\naadsfdsa",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      img: eczema,
      fullName: "Eczema",
      recentText: "Rough and inflamed patches of skin",
      fullText: "dfadfaf\naadsfdsa",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      img: kp,
      fullName: "Keratosis Pilaris",
      recentText: "Dry, rough patches and tiny bumps\non the skin",
      fullText: "dfadfaf\naadsfdsa",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      img: hives,
      fullName: "Hives",
      recentText: "Itchy, raised welts that are found on\nthe skin",
      fullText: "dfadfaf\naadsfdsa",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      img: sunburn,
      fullName: "Sun Burns",
      recentText: "Inflammatory reaction to ultraviolet (UV)\nradiation damage to the skin's outermost\nlayers",
      fullText: "dfadfaf\naadsfdsa",
    },
  ]
  return (
    <Box
      w={{
        base: "100%",
        md: "100%",
      }}
      h={{
        base: "100%",
        md: "100%",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
         <Pressable
         onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Dis', {
            fullName: item.fullName, 
            fullText: item.fullText,
            recentText: item.recentText,
            img: item.img,
          });
          }}
         >
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Image
                size={100}
                resizeMode={"contain"}
                source={item.img}
                alt="item.img"
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Spacer />
            </HStack>
          </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

/*
export default function App() {
  return (
    <NativeBaseProvider>
      <Center>
        <SkinDisList />
      </Center>
    </NativeBaseProvider>
  )
}
*/

const Stack2 = createStackNavigator();

function Home () { return (<Text>hi</Text>) }


function Dis2 ({ route, navigation }) {
  const { itemId, otherParam, img } = route.params;
  return (
    <Text>hi from {JSON.stringify(itemId)}</Text>
    )
}


function Dis ({ route, navigation }) {
  const { fullName, fullText, recentText, img } = route.params;
  navigation.setOptions({ title: fullName });
  return (
    <Box>
          <Box>
            <AspectRatio ratio={16 / 9}>
            <Center>
              <Image
                source={img}
                alt="image"

              />
            </Center>
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                 {fullName}
              </Heading>
              <Text
                fontSize="xs"
               
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {recentText}
              </Text>
            </Stack>
            <Text fontWeight="400">
                {fullText}
            </Text>
            </Stack>
        </Box>
    )
  }
  



export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack2.Navigator initialRouteName="Skin Conditions">
          <Stack2.Screen
            name="home"
            component={Home}
            options={{
              headerShown: true,
            }}
          />
          <Stack2.Screen
            name="Dis"
            component={Dis}
            options={{
              headerShown: true,
            }}
          />
          <Stack2.Screen
            name="Skin Conditions"
            component={SkinDisList}
            options={{
              headerShown: true,
            }}
          />
          </Stack2.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
      )
}



/*

import React from 'react';
import { Box, FlatList, NativeBaseProvider } from 'native-base';


export const Example = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  export default function App() {
    return (
      <NativeBaseProvider theme={BaseTheme} config={config}>
        <Root />
      </NativeBaseProvider>
    );
  }
  
  export const Root = () => {
    const [lightBg, darkBg] = useToken(
      'colors',
      ['coolGray.50', 'blueGray.900'],
      'blueGray.900',
    );
    const bgColor = useColorModeValue(lightBg, darkBg);
  
    return (
      <NavigationContainer
        theme={{
          colors: { background: bgColor },
        }}
      >
        <Box
          flex={1}
          w="100%"
          _light={{
            bg: 'coolGray.50',
          }}
          _dark={{
            bg: 'blueGray.900',
          }}
          // bg={useColorModeValue('', 'blueGray.900')}
          _web={{
            overflowX: 'hidden',
          }}
        >
          <RootStack />
        </Box>
      </NavigationContainer>
    );
  };
  
  return (
    <FlatList
      mt={6}
      data={data}
      renderItem={({ item }) => (
        <Box
          px={5}
          py={2}
          rounded="md"
          my={1}
          _light={{ bg: 'lightBlue.400' }}
          _dark={{ bg: 'blue.200' }}
        ></Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
*/