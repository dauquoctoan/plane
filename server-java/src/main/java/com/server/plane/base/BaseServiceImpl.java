package com.server.plane.base;

import java.lang.reflect.Method;
import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public class BaseServiceImpl<T, E, ID, M> {
    protected final M mapper;
    private final Class<T> entityClass;
    private final Class<E> exampleClass;

    public BaseServiceImpl(M mapper, Class<T> entityClass, Class<E> exampleClass) {
        this.mapper = mapper;
        this.entityClass = entityClass;
        this.exampleClass = exampleClass;
    }

    public T save(T entity) {
        invokeMapper("insertSelective", entity);
        return entity;
    }

    public T update(T entity) {
        invokeMapper("updateByPrimaryKeySelective", entity);
        return entity;
    }

    public void deleteById(ID id) {
        invokeMapper("deleteByPrimaryKey", id);
    }

    public Optional<T> findById(ID id) {
        T result = (T) invokeMapper("selectByPrimaryKey", id);
        return Optional.ofNullable(result);
    }

    public List<T> findAll() {
        try {
            E example = exampleClass.getDeclaredConstructor().newInstance();
            return (List<T>) invokeMapper("selectByExample", example);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<T> findByExample(E example) {
        return (List<T>) invokeMapper("selectByExample", example);
    }

    private Object invokeMapper(String methodName, Object param) {
        try {
            Method method = mapper.getClass().getMethod(methodName, param.getClass());
            return method.invoke(mapper, param);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}