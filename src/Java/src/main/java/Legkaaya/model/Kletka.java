package Legkaaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Legkaaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клетка
 */
@Entity(name = "IISLegkaayaКлетка")
@Table(schema = "public", name = "Клетка")
public class Kletka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКлетки")
    private Integer номерклетки;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Площадь")
    private String площадь;


    public Kletka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКлетки() {
      return номерклетки;
    }

    public void setНомерКлетки(Integer номерклетки) {
      this.номерклетки = номерклетки;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public String getПлощадь() {
      return площадь;
    }

    public void setПлощадь(String площадь) {
      this.площадь = площадь;
    }


}