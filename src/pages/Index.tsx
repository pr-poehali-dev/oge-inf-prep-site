import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const theoryTopics = [
    { id: 1, title: 'Системы счисления', difficulty: 'Легко', lessons: 5, icon: 'Binary' },
    { id: 2, title: 'Логические выражения', difficulty: 'Средне', lessons: 8, icon: 'Brain' },
    { id: 3, title: 'Алгоритмы и исполнители', difficulty: 'Средне', lessons: 6, icon: 'GitBranch' },
    { id: 4, title: 'Программирование на Python', difficulty: 'Сложно', lessons: 12, icon: 'Code' },
    { id: 5, title: 'Электронные таблицы', difficulty: 'Легко', lessons: 4, icon: 'Table' },
    { id: 6, title: 'Базы данных', difficulty: 'Средне', lessons: 7, icon: 'Database' },
  ];

  const taskCategories = [
    { id: 1, title: 'Задачи на системы счисления', count: 25, icon: 'Calculator' },
    { id: 2, title: 'Задачи на логику', count: 30, icon: 'Lightbulb' },
    { id: 3, title: 'Задачи на алгоритмы', count: 35, icon: 'Workflow' },
    { id: 4, title: 'Задачи на программирование', count: 40, icon: 'FileCode' },
  ];

  const videoPlaylists = [
    { id: 1, title: 'Системы счисления: полный разбор', videos: 8, duration: '2ч 15м', icon: 'Video' },
    { id: 2, title: 'Логические операции и таблицы истинности', videos: 12, duration: '3ч 40м', icon: 'Play' },
    { id: 3, title: 'Решение задач ОГЭ 2025', videos: 20, duration: '6ч 30м', icon: 'PlayCircle' },
  ];

  const tests = [
    { id: 1, title: 'Тест: Системы счисления', questions: 15, time: '20 мин' },
    { id: 2, title: 'Тест: Логика и алгоритмы', questions: 20, time: '30 мин' },
    { id: 3, title: 'Пробный ОГЭ 2025', questions: 25, time: '150 мин' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">ОГЭ Информатика</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'theory', 'tasks', 'tests', 'videos'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`font-semibold transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'theory' && 'Теория'}
                  {section === 'tasks' && 'Задачи'}
                  {section === 'tests' && 'Тесты'}
                  {section === 'videos' && 'Видео'}
                </button>
              ))}
            </div>
            <Button>Войти</Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16">
            <section className="text-center space-y-6 py-12">
              <Badge className="text-lg px-4 py-2" variant="secondary">Подготовка к ОГЭ 2026</Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Сдай ОГЭ по информатике
                <br />
                <span className="text-primary">на максимум!</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный курс подготовки с теорией, практикой и видео-разборами. Все материалы соответствуют программе ОГЭ 2025.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg" onClick={() => setActiveSection('theory')}>
                  Начать обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => setActiveSection('tests')}>
                  Пройти тест
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="BookOpen" size={40} className="text-primary mb-4" />
                  <CardTitle>Теория</CardTitle>
                  <CardDescription>6 разделов с подробными объяснениями</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="ListChecks" size={40} className="text-primary mb-4" />
                  <CardTitle>Практика</CardTitle>
                  <CardDescription>130+ задач разного уровня сложности</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Video" size={40} className="text-primary mb-4" />
                  <CardTitle>Видео</CardTitle>
                  <CardDescription>40+ видео-разборов сложных тем</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'theory' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Теория</h2>
              <p className="text-muted-foreground text-lg">
                Изучай темы последовательно или выбери интересующий раздел
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {theoryTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <Icon name={topic.icon as any} size={32} className="text-primary mb-3" />
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <CardDescription className="flex items-center justify-between mt-4">
                      <Badge variant={topic.difficulty === 'Легко' ? 'secondary' : topic.difficulty === 'Средне' ? 'default' : 'destructive'}>
                        {topic.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{topic.lessons} уроков</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Начать изучение</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tasks' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Задачи</h2>
              <p className="text-muted-foreground text-lg">
                Решай задачи и проверяй свои знания
              </p>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="solved">Решённые</TabsTrigger>
                <TabsTrigger value="favorite">Избранное</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-6 mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {taskCategories.map((category) => (
                    <Card key={category.id} className="hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Icon name={category.icon as any} size={28} className="text-primary" />
                            <div>
                              <CardTitle className="text-lg">{category.title}</CardTitle>
                              <CardDescription className="mt-2">
                                {category.count} задач
                              </CardDescription>
                            </div>
                          </div>
                          <Icon name="ChevronRight" size={24} className="text-muted-foreground" />
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="solved">
                <div className="text-center py-12 text-muted-foreground">
                  Здесь появятся решённые задачи
                </div>
              </TabsContent>
              <TabsContent value="favorite">
                <div className="text-center py-12 text-muted-foreground">
                  Добавляй задачи в избранное для быстрого доступа
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'tests' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Тесты</h2>
              <p className="text-muted-foreground text-lg">
                Проверь свои знания и оцени уровень подготовки
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((test) => (
                <Card key={test.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <Icon name="FileText" size={32} className="text-primary mb-3" />
                    <CardTitle className="text-xl">{test.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="HelpCircle" size={16} />
                        <span>{test.questions} вопросов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{test.time}</span>
                      </div>
                    </div>
                    <Button className="w-full">Начать тест</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'videos' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Видео-объяснения</h2>
              <p className="text-muted-foreground text-lg">
                Смотри разборы сложных тем и решений задач
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoPlaylists.map((playlist) => (
                <Card key={playlist.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                      <Icon name={playlist.icon as any} size={48} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{playlist.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="PlayCircle" size={16} />
                        <span>{playlist.videos} видео</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{playlist.duration}</span>
                      </div>
                    </div>
                    <Button className="w-full">Смотреть</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-20 py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <span className="font-bold text-lg">ОГЭ Информатика</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для подготовки к ОГЭ по информатике
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Теория</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Задачи</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Тесты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Видео</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Обратная связь</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 ОГЭ Информатика. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;