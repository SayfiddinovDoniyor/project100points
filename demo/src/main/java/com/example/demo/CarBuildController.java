@RestController
@RequestMapping("/api/carbuilds")
@CrossOrigin(origins = "http://localhost:3000")
public class CarBuildController {
  @Autowired private CarBuildRepository repo;

  @PostMapping
  public CarBuild save(@RequestBody CarBuild build) {
    return repo.save(build);
  }

  @GetMapping
  public List<CarBuild> getAll() {
    return repo.findAll();
  }
}
