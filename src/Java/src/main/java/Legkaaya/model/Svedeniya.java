package Legkaaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Legkaaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сведения
 */
@Entity(name = "IISLegkaayaСведения")
@Table(schema = "public", name = "Сведения")
public class Svedeniya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kletka")
    @Convert("Kletka")
    @Column(name = "Клетка", length = 16, unique = true, nullable = false)
    private UUID _kletkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kletka", insertable = false, updatable = false)
    private Kletka kletka;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vid")
    @Convert("Vid")
    @Column(name = "Вид", length = 16, unique = true, nullable = false)
    private UUID _vidid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vid", insertable = false, updatable = false)
    private Vid vid;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHivotnye")
    @Convert("ZHivotnye")
    @Column(name = "Животные", length = 16, unique = true, nullable = false)
    private UUID _zhivotnyeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHivotnye", insertable = false, updatable = false)
    private ZHivotnye zhivotnye;


    public Svedeniya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}