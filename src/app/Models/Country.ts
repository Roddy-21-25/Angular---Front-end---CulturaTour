import { Currency } from './Currency';

export interface Country {
  /**
     * Propiedades de la clase en el backend de asp.net core.
        public double gdp { get; set; }
        public double sex_ratio { get; set; }
        public double surface_area { get; set; }
        public double life_expectancy_male { get; set; }
        public double unemployment { get; set; }
        public double imports { get; set; }
        public double homicide_rate { get; set; }
        public Currency currency { get; set; }
        public string iso2 { get; set; }
        public double gdp_growth { get; set; }
        public double employment_services { get; set; }
        public double urban_population_growth { get; set; }
        public double secondary_school_enrollment_female { get; set; }
        public double employment_agriculture { get; set; }
        public string capital { get; set; }
        public double co2_emissions { get; set; }
        public double forested_area { get; set; }
        public double tourists { get; set; }
        public double exports { get; set; }
        public double life_expectancy_female { get; set; }
        public double post_secondary_enrollment_female { get; set; }
        public double post_secondary_enrollment_male { get; set; }
        public double primary_school_enrollment_female { get; set; }
        public double infant_mortality { get; set; }
        public double secondary_school_enrollment_male { get; set; }
        public double threatened_species { get; set; }
        public double population { get; set; }
        public double urban_population { get; set; }
        public double employment_industry { get; set; }
        public string name { get; set; }
        public double pop_growth { get; set; }
        public string region { get; set; }
        public double pop_density { get; set; }
        public double internet_users { get; set; }
        public double gdp_per_capita { get; set; }
        public double fertility { get; set; }
        public double refugees { get; set; }
        public double primary_school_enrollment_male { get; set; }
     */
  gdp: number;
  sex_ratio: number;
  surface_area: number;
  life_expectancy_male: number;
  unemployment: number;
  imports: number;
  homicide_rate: number;
  currency: Currency;
  iso2: string;
  gdp_growth: number;
  employment_services: number;
  urban_population_growth: number;
  secondary_school_enrollment_female: number;
  employment_agriculture: number;
  capital: string;
  co2_emissions: number;
  forested_area: number;
  tourists: number;
  exports: number;
  life_expectancy_female: number;
  post_secondary_enrollment_female: number;
  post_secondary_enrollment_male: number;
  primary_school_enrollment_female: number;
  infant_mortality: number;
  secondary_school_enrollment_male: number;
  threatened_species: number;
  population: number;
  urban_population: number;
  employment_industry: number;
  name: string;
  pop_growth: number;
  region: string;
  pop_density: number;
  internet_users: number;
  gdp_per_capita: number;
  fertility: number;
  refugees: number;
  primary_school_enrollment_male: number;
}
