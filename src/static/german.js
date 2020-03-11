const german = {
    title: 'Willkommen bei bit4Finance',
    subTitle: 'Bitte nutzen Sie Ihre - von uns übermittelte - Kunden-PIN und Kunden-Nr., um ein Ticket für den EDV-Helpdesk zu erstellen oder einzusehen.',
    login: 'Ihre Login Mail Adresse oder PIN',
    password: 'Ihr Passwort',
    requestLogin: 'Login anfodern',
    proceedLogin: 'Login',
    loading: 'Bitte, warten Sie...',
    admin: {
        title: 'Willkommen, Admin',
        login: 'Ihre E-Mail als Anmeldung',
        password: 'Ihr Passwort',
        proceedLogin: 'Login',
    },
    navButtons: {
        inbox: 'Inbox',
        back: 'Back to form',
        logout: 'Logout',
        login: 'Login again',
        table: 'Back to tickets'
    },
    ticket: {
        title: 'Erstellen Sie ein Ticket',
        subTitle: '',
        type: 'Kategorie',
        types: [
            {
                text: 'Support',
                value: 1
            },
            {
                text: 'Anfrage',
                value: 2
            },
            {
                text: 'Bestellung',
                value: 3
            }
        ],
        priority: 'Priorität',
        priorities: [
            {
                text: 'Niedrig',
                value: 1
            },
            {
                text: 'Mittel',
                value: 2
            },
            {
                text: 'Hoch',
                value: 3
            },
            {
                text: 'Eskalation',
                value: 4
            }
        ],
        responsible: 'Ansprechpartner für Rückfragen',
        subject: 'Subject of your question',
        description: 'Beschreibung',
        reset: 'Abbrechen',
        submit: 'Ticket erstellen',
        add: 'Neues Ticket',
        logout: ' Ausloggen'

    },
    table: {
        headers: {
            date: 'Datum',
            client: 'zugewiesen an',
            responsible: 'zugewiesen an',
            id: 'ID',
            type: 'Typ',
            time: 'Takte',
            status: 'Status',
            bill: 'Rechnungs-Nr.'
        },
        buttons: {
            filter: 'Filter',
            newTicket: 'Neues Ticket'
        },
        total: 'Total',
        start: 'Antworten',
        continue: 'Continue'
    },
    filter: {
        header: 'Filters',
        dateFrom: 'Datum von',
        dateTo: 'Datum bis',
        type: {
            title: 'Typ',
            choose: 'Typ auswählen',
            dropdown: [ 'Support','Request','Order']
        },
        responsible: {
            title: 'Zugewiesen an',
            dropdown: 'Verantwortlicher wählen'
        },
        time: 'Takte',
        client: {
            title: 'Hinzufügen durch den Kunden',
            dropdown: 'Kunde wählen'
        },
        status: 'Status',
        id: 'ID',
        bill: 'Rechnungs-Nr.',
        buttons: {
            reset: 'Alle Filter löschen',
            submit: 'Filter anwenden'
        }
    },
    emails: {
        table: {
            id: 'ID der Frage',
            email: 'Die E-Mail-Adresse',
            messages: 'Nachrichten',
            button: 'Antwort',
            total: 'Total'
        },

    },
    working: {
        title: 'ID der Frage: ',
        subject: 'Betreff der Nachricht',
        defaultSubject: 'Arbeiten mit Frage ',
        status: {
            title: 'Status der Frage',
            dropdown: 'Status ändern'
        },
        message: 'Nachricht',
        submit: 'Nachricht senden',
        notice: 'Denken Sie daran: Wenn Sie eine Nachricht senden, wird sich der Status der Frage ändern.',
        statuses: ['Einkommen', 'In Bearbeitung', 'Geschafft']
    },
    answer: {
        title: 'Antwort auf die Nachricht',
        subject: 'Betreff der Nachricht',
        message: 'Nachricht',
        submit: 'Nachricht senden'
    },
    auth_message: 'Sie sind jetzt nicht mehr authentifiziert. Bitte, loggen Sie sich ein oder aktualisieren Sie Ihr Token'
};
export default german;
