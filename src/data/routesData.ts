
/**
 * Dados das rotas da Navegação PP
 * Centralizados para facilitar manutenção e atualizações
 */

export interface RouteData {
  id: number;
  company: string;
  route: string;
  type: string;
  vessel: string;
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  days: string[];
  departureLocation: string;
  arrivalLocation: string;
  whatsapp: string;
  phone: string;
  image: string;
}

export const routes: RouteData[] = [
  {
    id: 1,
    company: "Navegação PP",
    route: "Maués → Manaus",
    type: "Embarcação",
    vessel: "F/B Estrela PP III",
    departure: "12:00h",
    arrival: "10:00h do dia seguinte",
    duration: "~22h",
    price: "R$ 120",
    days: ["Terça"],
    departureLocation: "Porto PP",
    arrivalLocation: "Manaus",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    company: "Navegação PP",
    route: "Maués → Manaus",
    type: "Embarcação",
    vessel: "F/B Estrela PP IV",
    departure: "12:00h",
    arrival: "10:00h do dia seguinte",
    duration: "~22h",
    price: "R$ 120",
    days: ["Quarta"],
    departureLocation: "Porto PP",
    arrivalLocation: "Manaus",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    company: "Navegação PP",
    route: "Maués → Manaus",
    type: "Embarcação",
    vessel: "F/B Estrela PP II",
    departure: "12:00h",
    arrival: "10:00h do dia seguinte",
    duration: "~22h",
    price: "R$ 120",
    days: ["Sexta"],
    departureLocation: "Porto PP",
    arrivalLocation: "Manaus",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    company: "Navegação PP",
    route: "Maués → Manaus",
    type: "Embarcação",
    vessel: "F/B Estrela PP III",
    departure: "12:00h",
    arrival: "10:00h do dia seguinte",
    duration: "~22h",
    price: "R$ 120",
    days: ["Sábado"],
    departureLocation: "Porto PP",
    arrivalLocation: "Manaus",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    company: "Navegação PP",
    route: "Maués → Manaus",
    type: "Embarcação",
    vessel: "N/M PP Maués I",
    departure: "12:00h",
    arrival: "10:00h do dia seguinte",
    duration: "~22h",
    price: "R$ 120",
    days: ["Domingo"],
    departureLocation: "Porto PP",
    arrivalLocation: "Manaus",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    company: "Navegação PP",
    route: "Manaus → Maués",
    type: "Embarcação",
    vessel: "F/B Estrela PP II",
    departure: "17:00h",
    arrival: "12:00h do dia seguinte",
    duration: "~19h",
    price: "R$ 120",
    days: ["Terça"],
    departureLocation: "Balsa Amarela",
    arrivalLocation: "Maués",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    company: "Navegação PP",
    route: "Manaus → Maués",
    type: "Embarcação",
    vessel: "N/M PP Maués I",
    departure: "17:00h",
    arrival: "12:00h do dia seguinte",
    duration: "~19h",
    price: "R$ 120",
    days: ["Quarta"],
    departureLocation: "Balsa Amarela",
    arrivalLocation: "Maués",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    company: "Navegação PP",
    route: "Manaus → Maués",
    type: "Embarcação",
    vessel: "F/B Estrela PP III",
    departure: "17:00h",
    arrival: "12:00h do dia seguinte",
    duration: "~19h",
    price: "R$ 120",
    days: ["Quinta"],
    departureLocation: "Balsa Amarela",
    arrivalLocation: "Maués",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    company: "Navegação PP",
    route: "Manaus → Maués",
    type: "Embarcação",
    vessel: "F/B Estrela PP IV",
    departure: "12:00h",
    arrival: "07:00h do dia seguinte",
    duration: "~19h",
    price: "R$ 120",
    days: ["Sábado"],
    departureLocation: "Balsa Amarela",
    arrivalLocation: "Maués",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    company: "Navegação PP",
    route: "Manaus → Maués",
    type: "Embarcação",
    vessel: "F/B Estrela PP III",
    departure: "17:00h",
    arrival: "12:00h do dia seguinte",
    duration: "~19h",
    price: "R$ 120",
    days: ["Domingo"],
    departureLocation: "Balsa Amarela",
    arrivalLocation: "Maués",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    company: "Navegação PP",
    route: "Maués → Manaus",
    type: "Ajato (Lancha)",
    vessel: "Ajato PP",
    departure: "07:00h",
    arrival: "17:00h",
    duration: "~10h",
    price: "R$ 250",
    days: ["Domingo", "Quarta"],
    departureLocation: "Porto PP",
    arrivalLocation: "Manaus",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1570717170846-c8637d6a7f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    company: "Navegação PP",
    route: "Manaus → Maués",
    type: "Ajato (Lancha)",
    vessel: "Ajato PP",
    departure: "07:00h",
    arrival: "17:00h",
    duration: "~10h",
    price: "R$ 250",
    days: ["Sexta", "Terça"],
    departureLocation: "Balsa Amarela",
    arrivalLocation: "Maués",
    whatsapp: "5592999999999",
    phone: "92999999999",
    image: "https://images.unsplash.com/photo-1570717170846-c8637d6a7f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Opções para os filtros
export const routeOptions = [
  "Manaus → Maués",
  "Maués → Manaus"
];

export const typeOptions = [
  "Embarcação",
  "Ajato (Lancha)"
];

export const dayOptions = [
  "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
];
