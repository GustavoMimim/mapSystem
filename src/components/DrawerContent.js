import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent (props) {

    const paperTheme = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../assets/avatar.jpg')}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, marginBottom: 25, flexDirection: 'column' }}>
                                    <Title style={styles.title}>Gustavo B. M.</Title>
                                    <Caption style={styles.caption}>Desenvolvedor</Caption>
                                </View>
                            </View>
                        </View>
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alert-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Notificações"
                            onPress={() => { props.navigation.navigate('Notifications') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="map"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Mapa"
                            onPress={() => { props.navigation.navigate('Maps') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-supervisor-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Colaboradores"
                            onPress={() => { props.navigation.navigate('Preferences') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-group"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Clientes"
                            onPress={() => { props.navigation.navigate('Customers') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="menu"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Configurações"
                            onPress={() => { props.navigation.navigate('Preferences') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});