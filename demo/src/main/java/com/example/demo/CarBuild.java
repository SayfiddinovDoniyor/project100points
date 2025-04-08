@Entity
public class CarBuild {
  @Id @GeneratedValue
  private Long id;
  private String model;
  private String color;
  private String rims;
}
