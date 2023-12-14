package Legkaaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Legkaaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Корм
 */
@Entity(name = "IISLegkaayaКорм")
@Table(schema = "public", name = "Корм")
public class Korm {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКорма")
    private Integer кодкорма;

    @Column(name = "Название")
    private String название;


    public Korm() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКорма() {
      return кодкорма;
    }

    public void setКодКорма(Integer кодкорма) {
      this.кодкорма = кодкорма;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}