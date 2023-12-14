package Legkaaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Legkaaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Животные
 */
@Entity(name = "IISLegkaayaЖивотные")
@Table(schema = "public", name = "Животные")
public class ZHivotnye {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЖивотного")
    private Integer номерживотного;

    @Column(name = "Кличка")
    private String кличка;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "zhivotnye", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Svedeniya> svedeniyas;


    public ZHivotnye() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЖивотного() {
      return номерживотного;
    }

    public void setНомерЖивотного(Integer номерживотного) {
      this.номерживотного = номерживотного;
    }

    public String getКличка() {
      return кличка;
    }

    public void setКличка(String кличка) {
      this.кличка = кличка;
    }


}