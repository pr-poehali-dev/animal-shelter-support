import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AnimalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const animals = [
    {
      id: "1",
      name: "Рекс",
      type: "Собака",
      breed: "Золотистый ретривер",
      age: "3 года",
      gender: "Мальчик",
      size: "Крупный",
      weight: "30 кг",
      color: "Золотистый",
      description: "Рекс — невероятно добрый и игривый пёс с золотым характером. Он обожает детей и готов играть с ними часами. Прекрасно ладит с другими животными и очень послушный. Рекс уже обучен базовым командам и отлично ходит на поводке.",
      character: ["Дружелюбный", "Активный", "Послушный", "Любит детей"],
      health: "Полностью здоров, все прививки сделаны, стерилизован",
      story: "Рекс был найден на улице зимой. Его бросили хозяева, когда он заболел. Мы вылечили его, и теперь он мечтает найти настоящую любящую семью, которая никогда его не предаст.",
      requirements: "Нужен дом с возможностью активных прогулок, желательно частный дом или квартира рядом с парком",
      image: "https://cdn.poehali.dev/projects/fd48aacc-5051-44af-9987-085bc45323c5/files/98a1846b-df5c-43ae-a1b9-390efa1ac95f.jpg",
      features: [
        { icon: "Check", text: "Обучен командам" },
        { icon: "Check", text: "Ладит с детьми" },
        { icon: "Check", text: "Социализирован" },
        { icon: "Check", text: "Привит и здоров" }
      ]
    },
    {
      id: "2",
      name: "Мурка",
      type: "Кошка",
      breed: "Домашняя короткошёрстная",
      age: "2 года",
      gender: "Девочка",
      size: "Средний",
      weight: "4 кг",
      color: "Полосатая",
      description: "Мурка — нежная и ласковая кошечка, которая обожает мурчать на коленях. Она очень спокойная и идеально подходит для квартирного содержания. Мурка любит играть с игрушками-удочками и наблюдать за птицами в окне.",
      character: ["Ласковая", "Спокойная", "Чистоплотная", "Независимая"],
      health: "Здорова, стерилизована, все прививки",
      story: "Мурку нашли маленьким котёнком у подъезда. Она была очень напугана и голодна. Мы выходили её, и теперь она превратилась в красивую и уверенную кошечку, готовую дарить любовь.",
      requirements: "Подходит для квартиры, желательно без маленьких детей",
      image: "https://cdn.poehali.dev/projects/fd48aacc-5051-44af-9987-085bc45323c5/files/969bc5dc-b2c4-4cb9-9380-499829e52992.jpg",
      features: [
        { icon: "Check", text: "Приучена к лотку" },
        { icon: "Check", text: "Спокойная" },
        { icon: "Check", text: "Не царапается" },
        { icon: "Check", text: "Стерилизована" }
      ]
    },
    {
      id: "3",
      name: "Бублик",
      type: "Щенок",
      breed: "Метис",
      age: "6 месяцев",
      gender: "Мальчик",
      size: "Средний (будет)",
      weight: "8 кг",
      color: "Рыжий с белым",
      description: "Бублик — это маленький комочек энергии и радости! Он невероятно активный, любознательный и жизнерадостный щенок. Обожает играть, учиться новому и исследовать мир. Идеален для активной семьи.",
      character: ["Энергичный", "Любознательный", "Игривый", "Умный"],
      health: "Здоров, первые прививки сделаны, обработан от паразитов",
      story: "Бублика и его братьев нашли в коробке у дороги. Малышей бросили совсем крошками. Бублик оказался самым смелым и активным из всех. Теперь он ищет семью, которая направит его энергию в правильное русло.",
      requirements: "Нужны активные хозяева, готовые к воспитанию и дрессировке щенка",
      image: "https://cdn.poehali.dev/projects/fd48aacc-5051-44af-9987-085bc45323c5/files/d7b6c034-047e-4fe6-a421-490133ef7771.jpg",
      features: [
        { icon: "Check", text: "Быстро учится" },
        { icon: "Check", text: "Игривый" },
        { icon: "Check", text: "Здоров" },
        { icon: "Check", text: "Привит" }
      ]
    }
  ];

  const animal = animals.find(a => a.id === id);

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Животное не найдено</h1>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: `Мы свяжемся с вами в ближайшее время по поводу ${animal.name}`,
    });
    setApplicationOpen(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="ArrowLeft" size={24} className="text-primary" />
            <span className="text-lg font-semibold">Назад</span>
          </button>
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">ДобрыеЛапки</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src={animal.image} 
                alt={animal.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                {animal.type}
              </div>
            </div>
            
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} className="text-primary" />
                  Основная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Порода</p>
                  <p className="font-semibold">{animal.breed}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Возраст</p>
                  <p className="font-semibold">{animal.age}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Пол</p>
                  <p className="font-semibold">{animal.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Размер</p>
                  <p className="font-semibold">{animal.size}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Вес</p>
                  <p className="font-semibold">{animal.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Окрас</p>
                  <p className="font-semibold">{animal.color}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-foreground">{animal.name}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {animal.character.map((trait, index) => (
                  <Badge key={index} variant="secondary" className="text-base px-4 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-primary" />
                  Описание
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{animal.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                  Особенности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {animal.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Icon name={feature.icon} size={18} className="text-primary" />
                      </div>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-primary" />
                  История спасения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed italic">{animal.story}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Stethoscope" size={24} className="text-primary" />
                  Здоровье
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{animal.health}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Home" size={24} className="text-primary" />
                  Требования к дому
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{animal.requirements}</p>
              </CardContent>
            </Card>

            <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full text-xl py-8 shadow-lg hover:shadow-xl transition-all">
                  <Icon name="Heart" size={24} className="mr-2" />
                  Хочу взять {animal.name}!
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="FileHeart" size={24} className="text-primary" />
                    Заявка на {animal.name}
                  </DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для организации встречи
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Расскажите о себе</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Опыт содержания животных, условия проживания..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary animate-fade-in">
          <CardContent className="py-8 text-center">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ещё не уверены?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Приезжайте в наш приют, познакомьтесь с {animal.name} лично! 
              Мы поможем определиться с выбором и ответим на все вопросы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                <Icon name="MapPin" size={20} className="mr-2" />
                Приехать в приют
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnimalDetail;
