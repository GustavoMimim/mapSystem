import React, { useState, useRef } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image, Animated, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { Searchbar, List, FAB } from 'react-native-paper'
import { getCustomers, findCustomers } from '../../database/Customers.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { event, ValueXY } = Animated
const scrollY = new ValueXY()

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default App = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');

    const [customersArr, setCustomersArr] = useState(getCustomers);

    const [showSearchBar, setShowSearchBar] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const onChangeSearch = query => {
        setSearchQuery(query);
        setCustomersArr(findCustomers(query));
    };

    const renderContent = () => (
        <View>
            <ScrollView
                style={{ flex: 1 }}

                refreshControl={<RefreshControl progressViewOffset={400} refreshing={refreshing} onRefresh={onRefresh} />}>

                <List.Section >
                    {
                        customersArr.map((item) => {
                            return (
                                <List.Item
                                    onPress={() => {
                                        navigation.navigate('Alterar Cliente', {
                                            customerID: item.id
                                        })
                                    }}
                                    title={item.name}
                                    description={item.id}
                                    key={item.id}
                                    right={props => <List.Icon {...props} icon="arrow-right" />}
                                />
                            )
                        })
                    }
                </List.Section>
            </ScrollView>
        </View>
    )

    const renderHeader = () => {

        const paddingBarOrIcons = showSearchBar ? 6 : 16

        return (
            <View style={{ backgroundColor: '#375a9a', padding: paddingBarOrIcons }}>
                    {showSearchBar &&
                        <View>
                            <Searchbar
                                placeholder="Pesquisar"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                                icon="arrow-left"
                                onIconPress={() => setShowSearchBar(false)}
                                autoFocus={true}
                            />
                        </View>
                    }
                    {!showSearchBar &&
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Icon
                                    name="menu"
                                    color={"white"}
                                    size={28}
                                    onPress={() => navigation.openDrawer()}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    name="account-search"
                                    color={"white"}
                                    size={28}
                                    onPress={() => setShowSearchBar(true)}
                                    style={{ paddingHorizontal: 6 }}
                                />
                                <Icon
                                    name="account-plus"
                                    color={"white"}
                                    size={28}
                                    onPress={() => navigation.navigate('Novo Cliente')}
                                    style={{ paddingHorizontal: 6 }}
                                />
                                <Icon
                                    name="refresh"
                                    color={"white"}
                                    size={28}
                                    onPress={() => setCustomersArr(getCustomers)}
                                    style={{ paddingHorizontal: 6 }}
                                />
                            </View>
                        </View>
                    }
            </View>
        )
    }

    return (

        <StickyParallaxHeader
            headerType="AvatarHeader"

            header={renderHeader}

            renderBody={renderContent}

            backgroundColor={'#375a9a'}

            headerHeight={65}

            parallaxHeight={200}

            snapStartThreshold={100}
            snapStopThreshold={0}

            image={null}

            title={'Clientes'}
            subtitle={'Todos os seus cliente, de uma forma útil e simplificada!'}

            scrollEvent={event(
                [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
                { useNativeDriver: false }
            )}

        />

    )
}


const styles = StyleSheet.create({
    headerCotainer: {
        backgroundColor: '#375a9a'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
