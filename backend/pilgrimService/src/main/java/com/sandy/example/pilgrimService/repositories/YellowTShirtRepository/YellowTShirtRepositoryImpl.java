package com.sandy.example.pilgrimService.repositories.YellowTShirtRepository;

import com.sandy.example.pilgrimService.models.YellowTShirt;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class YellowTShirtRepositoryImpl implements YellowTShirtRepositoryCustom {
    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<YellowTShirt> getYellowTShirtsForGroup(String group) {
        List<YellowTShirt> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(YellowTShirt.class);

            cr.add(Restrictions.eq("shift", group));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }
}
