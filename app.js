const { createApp, ref, watch } = Vue

createApp({
    setup() {
        const translations = {
            en: {
                nav: {
                    overview: 'Overview',
                    features: 'Features',
                    download: 'Download'
                },
                hero: {
                    title: 'FolderToPDF',
                    tagline: 'Simplify Script Debugging with Intelligent File Conversion'
                },
                overview: {
                    title: 'What is FolderToPDF?',
                    description: 'A simple utility designed to streamline your script debugging workflow. Easily convert folder contents into organized PDF or TXT files with advanced filtering and processing capabilities.',
                    keyBenefits: 'Key Benefits',
                    benefits: [
                        'Comprehensive Folder Scanning',
                        'Customizable Filtering Options',
                        'Sensitive Data Protection',
                        'Detailed File Statistics'
                    ]
                },
                features: {
                    title: 'Features',
                    items: [
                        {
                            title: 'Directory Scanning',
                            description: 'Automatically scan and convert folder contents into a comprehensive PDF or TXT file.'
                        },
                        {
                            title: 'Customizable Filters',
                            description: [
                                'Include/exclude specific file extensions',
                                'Selective folder and file filtering'
                            ]
                        },
                        {
                            title: 'Profile Management',
                            description: 'Save and quickly switch between multiple filter configurations for different projects.'
                        },
                        {
                            title: 'Data Processing',
                            description: [
                                'Comment trimming',
                                'Sensitive information removal'
                            ]
                        },
                        {
                            title: 'Advanced Statistics',
                            description: [
                                'Total line count',
                                'AI token estimation (GPT-4 default)'
                            ]
                        },
                        {
                            title: 'Easy Interaction',
                            description: 'Drag & drop folder support for instant file processing.'
                        }
                    ]
                },
                howItWorks: {
                    title: 'How It Works',
                    steps: [
                        {
                            stepNumber: '1',
                            title: 'Select Folder',
                            description: 'Drag and drop or select the folder you want to convert.'
                        },
                        {
                            stepNumber: '2',
                            title: 'Configure Filters',
                            description: 'Choose file types, exclude sensitive folders, and set processing options.'
                        },
                        {
                            stepNumber: '3',
                            title: 'Generate Output',
                            description: 'Get a clean, organized PDF or TXT with optional statistics.'
                        }
                    ]
                },
                about: {
                    title: 'About the Project',
                    description: 'Created as a personal debugging tool to simplify script analysis with AI models. This project is continuously evolving, and feedback is always welcome. Some features are still under development.',
                    disclaimer: 'Developed with ❤️ and a commitment to continuous improvement.'
                },
                download: {
                    title: 'Download',
                    downloadButton: 'Download',
                    platforms: [
                        {
                            name: 'Windows',
                            description: 'Compatible with Windows 10 and 11',
                            link: 'https://github.com/vtstv/FolderToPDF/releases'
                        }
                    ]
                },
                footer: {
                    copyright: '© 2024 Murr',
                    disclaimer: 'No kitties were harmed in the making of this website.'
                }
            },

            de: {
                nav: {
                    overview: 'Überblick',
                    features: 'Funktionen',
                    download: 'Herunterladen'
                },
                hero: {
                    title: 'FolderToPDF',
                    tagline: 'Vereinfachen Sie das Debugging von Skripten mit intelligenter Dateikonvertierung'
                },
                overview: {
                    title: 'Was ist FolderToPDF?',
                    description: 'Ein einfaches Dienstprogramm, das Ihren Skript-Debugging-Workflow optimiert. Konvertieren Sie Ordnerinhalte einfach in organisierte PDF- oder TXT-Dateien mit erweiterten Filter- und Verarbeitungsmöglichkeiten.',
                    keyBenefits: 'Hauptvorteile',
                    benefits: [
                        'Umfassende Ordner-Scan-Funktion',
                        'Anpassbare Filteroptionen',
                        'Schutz sensibler Daten',
                        'Detaillierte Dateistatistiken'
                    ]
                },
                features: {
                    title: 'Funktionen',
                    items: [
                        {
                            title: 'Verzeichnis-Scan',
                            description: 'Automatisches Scannen und Konvertieren von Ordnerinhalten in eine umfassende PDF- oder TXT-Datei.'
                        },
                        {
                            title: 'Anpassbare Filter',
                            description: [
                                'Einschließen/Ausschließen bestimmter Dateierweiterungen',
                                'Selektive Ordner- und Dateifilterung'
                            ]
                        },
                        {
                            title: 'Profilmanagement',
                            description: 'Speichern und schnelles Wechseln zwischen verschiedenen Filterkonfigurationen für unterschiedliche Projekte.'
                        },
                        {
                            title: 'Datenverarbeitung',
                            description: [
                                'Kommentare entfernen',
                                'Entfernung sensibler Informationen'
                            ]
                        },
                        {
                            title: 'Erweiterte Statistiken',
                            description: [
                                'Gesamte Zeilenanzahl',
                                'KI-Token-Schätzung (GPT-4 Standard)'
                            ]
                        },
                        {
                            title: 'Einfache Interaktion',
                            description: 'Drag & Drop-Ordner-Unterstützung für sofortige Dateiverarbeitung.'
                        }
                    ]
                },
                howItWorks: {
                    title: 'Wie es funktioniert',
                    steps: [
                        {
                            stepNumber: '1',
                            title: 'Ordner auswählen',
                            description: 'Ziehen Sie einen Ordner per Drag & Drop oder wählen Sie ihn aus, den Sie konvertieren möchten.'
                        },
                        {
                            stepNumber: '2',
                            title: 'Filter konfigurieren',
                            description: 'Wählen Sie Dateitypen, schließen Sie vertrauliche Ordner aus und legen Sie Verarbeitungsoptionen fest.'
                        },
                        {
                            stepNumber: '3',
                            title: 'Ausgabe generieren',
                            description: 'Erhalten Sie eine saubere, organisierte PDF- oder TXT-Datei mit optionalen Statistiken.'
                        }
                    ]
                },
                about: {
                    title: 'Über das Projekt',
                    description: 'Entwickelt als persönliches Debugging-Tool zur Vereinfachung der Skriptanalyse mit KI-Modellen. Dieses Projekt entwickelt sich ständig weiter, und Feedback ist jederzeit willkommen. Einige Funktionen befinden sich noch in der Entwicklung.',
                    disclaimer: 'Entwickelt mit ❤️ und dem Engagement zur kontinuierlichen Verbesserung.'
                },
                download: {
                    title: 'Herunterladen',
                    downloadButton: 'Herunterladen',
                    platforms: [
                        {
                            name: 'Windows',
                            description: 'Kompatibel mit Windows 10 und 11',
                            link: 'https://github.com/vtstv/FolderToPDF/releases'
                        }
                    ]
                },
                footer: {
                    copyright: '© 2024 Murr',
                    disclaimer: 'Bei der Erstellung dieser Website wurde keine Katze verletzt.'
                }
            },

            ru: {
                nav: {
                    overview: 'Обзор',
                    features: 'Особенности',
                    download: 'Скачать'
                },
                hero: {
                    title: 'FolderToPDF',
                    tagline: 'Упростите отладку скриптов с помощью интеллектуальной конверсии файлов'
                },
                overview: {
                    title: 'Что такое FolderToPDF?',
                    description: 'Простое приложение, предназначенное для оптимизации рабочего процесса отладки скриптов. Легко конвертируйте содержимое папок в организованные PDF или TXT файлы с расширенными возможностями фильтрации и обработки.',
                    keyBenefits: 'Основные преимущества',
                    benefits: [
                        'Полное сканирование папок',
                        'Настраиваемые параметры фильтрации',
                        'Защита конфиденциальных данных',
                        'Подробная статистика файлов'
                    ]
                },
                features: {
                    title: 'Особенности',
                    items: [
                        {
                            title: 'Сканирование директорий',
                            description: 'Автоматическое сканирование и конвертация содержимого папки в комплексный PDF или TXT файл.'
                        },
                        {
                            title: 'Настраиваемые фильтры',
                            description: [
                                'Включение/исключение определенных расширений файлов',
                                'Выборочное фильтрование папок и файлов'
                            ]
                        },
                        {
                            title: 'Управление профилями',
                            description: 'Сохранение и быстрая смена нескольких конфигураций фильтров для различных проектов.'
                        },
                        {
                            title: 'Обработка данных',
                            description: [
                                'Удаление комментариев',
                                'Удаление конфиденциальной информации'
                            ]
                        },
                        {
                            title: 'Продвинутая статистика',
                            description: [
                                'Общий счет строк',
                                'Оценка токенов ИИ (по умолчанию GPT-4)'
                            ]
                        },
                        {
                            title: 'Простой интерфейс',
                            description: 'Поддержка перетаскивания папок для мгновенной обработки файлов.'
                        }
                    ]
                },
                howItWorks: {
                    title: 'Как это работает',
                    steps: [
                        {
                            stepNumber: '1',
                            title: 'Выберите папку',
                            description: 'Перетащите или выберите папку, которую хотите конвертировать.'
                        },
                        {
                            stepNumber: '2',
                            title: 'Настройте фильтры',
                            description: 'Выберите типы файлов, исключите конфиденциальные папки и настройте параметры обработки.'
                        },
                        {
                            stepNumber: '3',
                            title: 'Создайте вывод',
                            description: 'Получите чистый и организованный PDF или TXT с дополнительной статистикой (по желанию).'
                        }
                    ]
                },
                about: {
                    title: 'О проекте',
                    description: 'Создано как персональный инструмент для отладки, упрощающий анализ скриптов с помощью ИИ моделей. Этот проект постоянно развивается, и мы всегда рады получить отзывы. Некоторые функции все еще находятся в разработке.',
                    disclaimer: 'Разработано с ❤️ и стремлением к постоянному улучшению.'
                },
                download: {
                    title: 'Скачать',
                    downloadButton: 'Скачать',
                    platforms: [
                        {
                            name: 'Windows',
                            description: 'Совместимо с Windows 10 и 11',
                            link: 'https://github.com/vtstv/FolderToPDF/releases'
                        }
                    ]
                },
                footer: {
                    copyright: '© 2024 Murr',
                    disclaimer: 'В процессе создания этого сайта не пострадало ни одного котика.'
                }
            }

            
        }


        const currentLanguage = ref(localStorage.getItem('language') || 'en')
        const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

        const t = (key) => {
            const keys = key.split('.')
            return keys.reduce((obj, k) => obj[k], translations[currentLanguage.value])
        }

        watch(currentLanguage, (newLang) => {
            document.documentElement.lang = newLang
            localStorage.setItem('language', newLang)  
        })

        watch(isDarkMode, (isDark) => {
            document.documentElement.classList.toggle('dark', isDark)
            document.documentElement.classList.toggle('light', !isDark)
            localStorage.setItem('theme', isDark ? 'dark' : 'light')
        })

        return {
            currentLanguage,
            isDarkMode,
            t
        }
    }
}).mount('#app')