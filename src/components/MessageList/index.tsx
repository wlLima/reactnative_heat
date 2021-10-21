import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../../components/Message';
import { styles } from './styles';

export function MessageList() {

    const message = {
        id: '1',
        text: 'Testando mensagem',
        user: {
            name: 'William Lima',
            avatar_url: "https://github.com/wlLima.png"
        }
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </ScrollView>
    );
}