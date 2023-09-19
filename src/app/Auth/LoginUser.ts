export interface LoginUser {
  /**
     *  public int Id { get; set; }
        public string EmailLogin { get; set; } = null!;
        public string PasswordLogin { get; set; } = null!;
     */
  id: number;
  emailLogin: string;
  passwordLogin: string;
}
