import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const animals = [
    {
      id: 1,
      name: "Рекс",
      type: "Собака",
      age: "3 года",
      description: "Добрый и игривый золотистый ретривер, обожает детей и прогулки",
      image: "https://cdn.poehali.dev/projects/fd48aacc-5051-44af-9987-085bc45323c5/files/98a1846b-df5c-43ae-a1b9-390efa1ac95f.jpg"
    },
    {
      id: 2,
      name: "Мурка",
      type: "Кошка",
      age: "2 года",
      description: "Ласковая и спокойная кошечка, идеальна для квартиры",
      image: "https://cdn.poehali.dev/projects/fd48aacc-5051-44af-9987-085bc45323c5/files/969bc5dc-b2c4-4cb9-9380-499829e52992.jpg"
    },
    {
      id: 3,
      name: "Бублик",
      type: "Щенок",
      age: "6 месяцев",
      description: "Энергичный малыш, ищет активных хозяев",
      image: "https://cdn.poehali.dev/projects/fd48aacc-5051-44af-9987-085bc45323c5/files/d7b6c034-047e-4fe6-a421-490133ef7771.jpg"
    }
  ];

  const rescueStories = [
    {
      id: 1,
      name: "Барсик",
      before: "Найден на улице в сильный мороз, истощённый и больной",
      after: "Сейчас это счастливый и здоровый кот, живущий в любящей семье",
      transformation: "3 месяца реабилитации изменили его жизнь навсегда"
    },
    {
      id: 2,
      name: "Лаки",
      before: "Брошена хозяевами, боялась людей",
      after: "Обрела уверенность и стала верным другом новой семьи",
      transformation: "Любовь и терпение творят чудеса"
    },
    {
      id: 3,
      name: "Тишка",
      before: "Попала под машину, требовалась сложная операция",
      after: "Полностью восстановилась и снова радуется жизни",
      transformation: "Благодаря вашей помощи мы спасли её"
    }
  ];

  const helpOptions = [
    {
      icon: "Heart",
      title: "Финансовая помощь",
      description: "Ваши пожертвования идут на корм, лечение и содержание животных"
    },
    {
      icon: "Home",
      title: "Стать опекуном",
      description: "Возьмите питомца домой и подарите ему любящую семью"
    },
    {
      icon: "Users",
      title: "Волонтёрство",
      description: "Помогайте в приюте: выгул, уход, социализация животных"
    },
    {
      icon: "Package",
      title: "Помощь вещами",
      description: "Корм, игрушки, медикаменты — всё пригодится"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">ДобрыеЛапки</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#animals" className="text-foreground hover:text-primary transition-colors">Животные</a>
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">Истории</a>
            <a href="#help" className="text-foreground hover:text-primary transition-colors">Помощь</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="lg">
            <Icon name="Heart" size={18} className="mr-2" />
            Помочь сейчас
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary via-background to-accent py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Каждое животное заслуживает <span className="text-primary">любви и дома</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы помогаем бездомным животным найти свою семью и начать новую жизнь, полную тепла и заботы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Heart" size={20} className="mr-2" />
              Взять питомца
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="HandHeart" size={20} className="mr-2" />
              Поддержать приют
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Спасённых животных</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">89</div>
              <div className="text-muted-foreground">Нашли дом</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Работаем для них</div>
            </div>
          </div>
        </div>
      </section>

      <section id="animals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши питомцы</h2>
            <p className="text-xl text-muted-foreground">Они ждут встречи с вами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <Card 
                key={animal.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                    {animal.type}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="PawPrint" size={24} className="text-primary" />
                    {animal.name}
                  </CardTitle>
                  <CardDescription className="text-base">Возраст: {animal.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{animal.description}</p>
                  <Button className="w-full">
                    <Icon name="Home" size={18} className="mr-2" />
                    Познакомиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Истории спасения</h2>
            <p className="text-xl text-muted-foreground">Как мы меняем жизни к лучшему</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {rescueStories.map((story) => (
              <Card 
                key={story.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in border-l-4 border-l-primary"
                onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-2xl">
                    <span className="flex items-center gap-2">
                      <Icon name="Sparkles" size={24} className="text-primary" />
                      {story.name}
                    </span>
                    <Icon 
                      name={expandedStory === story.id ? "ChevronUp" : "ChevronDown"} 
                      size={24} 
                      className="text-muted-foreground"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-destructive/10 p-2 rounded-full">
                      <Icon name="AlertCircle" size={20} className="text-destructive" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Было:</p>
                      <p className="text-muted-foreground">{story.before}</p>
                    </div>
                  </div>
                  {expandedStory === story.id && (
                    <div className="space-y-4 animate-accordion-down">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Icon name="CheckCircle2" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Стало:</p>
                          <p className="text-muted-foreground">{story.after}</p>
                        </div>
                      </div>
                      <div className="bg-accent p-4 rounded-lg">
                        <p className="text-center font-semibold text-accent-foreground italic">
                          "{story.transformation}"
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Как помочь</h2>
            <p className="text-xl text-muted-foreground">Любая помощь важна и ценна</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpOptions.map((option, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={option.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary">
              <CardContent className="pt-6">
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Сделайте доброе дело сегодня</h3>
                <p className="text-muted-foreground mb-6">
                  Ваша поддержка помогает нам спасать жизни и дарить животным второй шанс
                </p>
                <Button size="lg" className="text-lg px-8">
                  <Icon name="HandHeart" size={20} className="mr-2" />
                  Поддержать приют
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес приюта
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">г. Москва, ул. Добрая, д. 12</p>
                <p className="text-muted-foreground">Режим работы: ежедневно с 9:00 до 20:00</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={18} />
                  <span>help@dobryelapki.ru</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать нам
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={32} className="text-primary" />
              <span className="text-2xl font-bold">ДобрыеЛапки</span>
            </div>
            <p className="text-center text-background/80">
              © 2026 ДобрыеЛапки. Помогаем животным обрести дом
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Icon name="Twitter" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
